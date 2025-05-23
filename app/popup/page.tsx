"use client"

import { useZupassPopupSetup } from "@pcd/passport-interface"

export default function Popup() {
  return <div>{useZupassPopupSetup()}</div>
}
