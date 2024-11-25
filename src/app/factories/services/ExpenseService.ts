import { buildExpenseDatabase } from "../storage/ExpenseDatabase";
import { ExpenseService } from "../../../services/ExpenseService";

export const buildExpenseService = () => {
    const database = buildExpenseDatabase()
    return new ExpenseService(database)
}