let n = window.innerWidth;

const columns = [
  {
    field: "date",
    headerName: "Дата проведения матча",
    width: n / 8,
    editable: true,

    align: "left",
  },
  {
    field: "time",
    headerName: "Время",
    width: n / 15,
    editable: true,
    align: "left",
  },
  {
    field: "status",
    headerName: "Статус",
    type: "string",
    width: n / 9,
    editable: true,
  },
  {
    field: "team 1 - team 2",
    headerName: "Команда 1 - Команда 2",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: (n + 400) / 6,
    type: "string",
  },
  {
    field: "score",
    headerName: "Счет",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: n / 16,
  },
];

export default columns;
