const TransactionPage = () => {
  return (
    <div className="container">
      <h2>Balance</h2>
      <h2>ReportNav</h2>
      <h2>TrnsactionForm</h2>
      <h2>TransactionsList</h2>
      <h2>Summary</h2>
    </div>
  );
};

export default TransactionPage;

const iS = {
  incomes: [
    {
      description: "Income description",
      amount: 100,
      date: "2020-12-31",
      category: "Доход",
      _id: "507f1f77bcf86cd799439011",
    },
    {
      description: "Income description",
      amount: 100,
      date: "2020-12-31",
      category: "Доход",
      _id: "507f1f77bcf86cd799439011",
    },
    {
      description: "Income description",
      amount: 100,
      date: "2020-12-31",
      category: "Доход",
      _id: "507f1f77bcf86cd799439011",
    },
    {
      description: "Income description",
      amount: 100,
      date: "2020-12-31",
      category: "Доход",
      _id: "507f1f77bcf86cd799439011",
    },
  ],
  monthStats: {
    Январь: 5,
    Февраль: 100,
    Март: "N/A",
    Апрель: "N/A",
    Май: 1,
    Июнь: "N/A",
    Июль: 3,
    Август: "N/A",
    Сентябрь: "N/A",
    Октябрь: 77,
    Ноябрь: "N/A",
    Декабрь: 123,
  },
};

const state = {
  auth: {},
  transictions: {
    income: [],
    expense: [],
  },
  stats: {
    income: [],
    expense: [],
  },
  reports: {
    incomes: {},
    expenses: {},
  },
};

const categoriesMap = {
  Транспорт: {
    name: "transport", // icon-transport
    title: {
      en: "Transport",
      ua: "Транспорт",
    },
  },
  "Всё для дома": "Housing",
};
