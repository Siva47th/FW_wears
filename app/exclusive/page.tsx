import type { Metadata } from "next";
import ExclusiveVaultView from "@/components/ExclusiveVaultView";

export const metadata: Metadata = {
  title: "The Exclusive Vault — Numbered Limited Drops | FW Wears",
  description:
    "Bespoke haute-couture and rare numbered editions crafted in strictly limited quantities. Cashmere bombers, Italian leather weekenders, and more at FW Wears.",
  openGraph: {
    title: "The Exclusive Vault — Numbered Limited Drops | FW Wears",
    description: "Bespoke haute-couture and rare numbered editions.",
  },
};

export default function ExclusivePage() {
  return <ExclusiveVaultView />;
}
