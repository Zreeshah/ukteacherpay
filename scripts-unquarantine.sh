#!/bin/sh
# macOS only: strip the com.apple.quarantine flag that Gatekeeper sets on
# downloaded native .node binaries. Without this, Next.js/Tailwind native
# bindings are blocked by system policy and macOS shows a
# "<binary> Not Opened" popup on every build.
[ "$(uname)" = "Darwin" ] || exit 0
xattr -r -d com.apple.quarantine node_modules 2>/dev/null
exit 0
