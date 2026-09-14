#!/usr/bin/env bash
#
# Every knowledge layer's charter carries the sections a member cannot supply for itself.
#
# A charter is a set's only voice: it states the territory the population covers, what admits a
# member, what a healthy population looks like as against a merely valid one, and where the
# members are. A member has no standing to answer any of those and no way to know whether the
# population is complete, so a charter missing one leaves the question unanswerable rather than
# merely unanswered.
#
# Required minimum, never a fixed table of contents. The declaration lists what must be present;
# order is free and every other section is the set's own substance. Thirteen charters were
# written before this existed and each invented its own shape, which is the divergence E3 records
# and this check stops recurring.
#
# The set of charters is DERIVED, not listed: a knowledge layer's charter is the entry whose id
# matches its prefix followed by zero. A layer added tomorrow is gated without editing this file.
#
# ADVISORY until the backlog debt it measures is cleared. Thirteen charters predate the
# declaration and thirty sections are missing across them; gating on that today would refuse every
# unrelated change for a debt the change did not create. So the check reports and exits zero, and
# flips to blocking when the count reaches nought - which is tracked as B4 and is the only reason
# an advisory gate is honest rather than decorative. A gate that never flips is a gate nobody runs.
#
# Usage:  tools/check-charter-shape.sh            report, never blocking
#         tools/check-charter-shape.sh --strict   exit non-zero on any gap

set -uo pipefail
root=$(cd "$(dirname "$0")/.." && pwd)
cd "$root"

decl=schemas/entry-body/v1alpha1/entry-body.json
[ -f "$decl" ] || { echo "FAIL  missing        $decl does not exist"; exit 1; }

wanted=$(node -e '
	const fs = require("fs");
	const d = JSON.parse(fs.readFileSync(process.argv[1], "utf8"));
	const c = d.spec.charters;
	if (!c) process.exit(1);
	process.stdout.write(c.sections.join("\n"));
' "$decl") || { echo "FAIL  missing        $decl declares no charters shape"; exit 1; }

fail=0
checked=0

# Tracked plus untracked-not-ignored, so a brand new charter is gated on the change that adds it -
# which is exactly when its shape has never been reviewed by anyone.
files=$( { git ls-files '*/README.md'; git ls-files --others --exclude-standard '*/README.md'; } | sort -u)

for file in $files; do
	# A charter declares a category and carries an id of the form <PREFIX>0. Anything else in a
	# layer directory is a plain readme and is not a set's voice.
	id=$(awk 'FNR==1{next} /^---$/{exit} /^id:/{sub(/^id:[[:space:]]*/, ""); gsub(/"/, ""); print; exit}' "$file")
	case "$id" in
		*0) ;;
		*) continue ;;
	esac
	[ -n "$(awk 'FNR==1{next} /^---$/{exit} /^category:/{print}' "$file")" ] || continue

	checked=$((checked + 1))
	present=$(grep -E '^## ' "$file" | sed 's/^## //')

	while IFS= read -r want; do
		[ -z "$want" ] && continue
		printf '%s\n' "$present" | grep -qxF "$want" || {
			[ "${1:-}" = "--strict" ] && printf 'FAIL  %-12s %s is missing the section "%s"\n' "$id" "$file" "$want"
			fail=$((fail + 1))
		}
	done <<< "$wanted"
done

strict=0
[ "${1:-}" = "--strict" ] && strict=1

if [ "$fail" -gt 0 ]; then
	echo
	echo "$fail missing section(s) across $checked charter(s) - run --strict to list them."
	[ "$strict" -eq 1 ] && exit 1
	echo "ADVISORY: not blocking. Tracked as B4; flips to blocking at zero."
	exit 0
fi

echo
echo "clean: $checked charter(s) carry every required section."
exit 0
