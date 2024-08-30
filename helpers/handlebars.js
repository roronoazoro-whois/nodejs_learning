const handlebars = require("handlebars");

module.exports = {
  sum: (a, b) => a + b,
  sortable: (field, sort) => {
    const sortType = field === sort.column ? sort.type : "default";

    const icons = {
      default: "fa-solid fa-sort",
      desc: "fa-solid fa-sort-up",
      asc: "fa-solid fa-sort-down",
    };

    const types = {
      default: "asc",
      asc: "desc",
      desc: "asc",
    };

    const icon = icons[sortType];
    const type = types[sortType];

    const href = handlebars.escapeExpression(
      `?_sort&column=${field}&type=${type}`
    );

    const output = `<a href="${href}" class="ms-2"><i class="${icon}"></i></a>`;

    return new handlebars.SafeString(output);
  },
};
