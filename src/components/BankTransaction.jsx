export default function BankTransaction({ transaction } = props) {
  return (
    <div>
      <h1 data-testid="tipoTransacao">{transaction.name}</h1>
      {transaction.name === "Transferência" ? (
        <h2 data-testid="valorTransacao">- R$ {transaction.value}</h2>
      ) : (
        <h2 data-testid="valorTransacao">R$ {transaction.value}</h2>
      )}
    </div>
  );
}
