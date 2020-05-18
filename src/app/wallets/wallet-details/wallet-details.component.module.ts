import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { IdenticonComponentModule } from "@/components/identicon/identicon.module";
import { PipesModule } from "@/pipes/pipes.module";

import { TransactionListComponentModule } from "../../transactions/transaction-list/transaction-list.component.module";
import { WalletDetailsComponent } from "./wallet-details.component";

@NgModule({
	declarations: [WalletDetailsComponent],
	imports: [
		IonicModule,
		CommonModule,
		PipesModule,
		TransactionListComponentModule,
		IdenticonComponentModule,
	],
	exports: [WalletDetailsComponent],
})
export class WalletDetailsComponentModule {}
