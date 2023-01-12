import { model, Schema } from "mongoose"

export type IBlacklistedTokens = {
  token: string
}

const BlacklistedTokensSchema = new Schema<IBlacklistedTokens>({
  token: String,
})

export const BlacklistedTokensModel = model<IBlacklistedTokens>('BlacklistedTokensModel', BlacklistedTokensSchema);