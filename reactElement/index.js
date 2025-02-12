const h2 = React.createElement(
  "h1",
  {
    className: "heading",
    style: {
      color: "red",
    },
  },
  [
    React.createElement(
      "span",
      {
        key: 1,
        className: "subhead",
        style: {
          color: "blue",
        },
      },
      "i am children"
    ), //inside a h1 append span tag
  ]
); //creating a react element*/

const root = ReactDOM.createRoot(document.querySelector("#root")); //access the tag where i need to insert
//root.render(h2); //append it

//Creating a form using React..
const form = React.createElement(
  "div",
  {
    id: "container",
    style: {
      maxWidth: 200,
      display: "flex",
      justifyContent: "space-between",
    },
  },
  [
    React.createElement("form", { className: "my_form", name: "form" }, [
      React.createElement(
        "label",
        { htmlFor: "username", key: "label1" },
        "Name: "
      ), // ✅ Correct htmlFor usage
      React.createElement("input", {
        key: 1,
        id: "username", // ✅ Use id to match label
        type: "text",
        placeholder: "Enter your Name",
      }),

      React.createElement("label", { htmlFor: "age", key: "label2" }, "Age: "),
      React.createElement("input", {
        key: 2,
        id: "age",
        type: "text",
        placeholder: "Enter your age",
      }),

      React.createElement(
        "label",
        { htmlFor: "phone", key: "label3" },
        "Phone: "
      ),
      React.createElement("input", {
        key: 3,
        id: "phone",
        type: "text",
        placeholder: "Enter your ph number",
      }),
    ]),
  ]
);
const app = React.createElement("div", {}, [h2, form]); //for wrapping 2 elements otherwise it will override
root.render(app);
