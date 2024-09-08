import { Configuration, TransactionsApi } from "@svidleo/accounter-sdk";

interface PostPageProps {
    params: {
      from: string;  // the dynamic route parameter, e.g. 'id'
      to: string;
    };
  }

export default async function TransactionsPage({ params }: PostPageProps) {
    const getTransactions = async () => {
        const sdk = await new TransactionsApi(new Configuration({basePath: "http://localhost:3001/api"}));

        return sdk.listTransactions({request: {from: new Date('2024-08-19T21:44:05.689+00:00')}});
        
    }

    const transactions = await getTransactions();
    return (
        <div className="bg-slate-50">
            <h1>Transactions</h1>
            <ul>
                <span>{JSON.stringify(params)}</span>-<span>{params.to}</span>
                {transactions.map((transaction) => {
                    return (
                        <li key={transaction.transactionId}>
                            {transaction.transactionRef}
                        </li>
                    );
                })}
                </ul>
        </div>
    );
}
