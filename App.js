const heading = React.createElement(
    "h1",
    {
        id: "title"
    },
    "Heading"
)

const heading2 = React.createElement(
    "h2",
    {
        id: "title"
    },
    "Heading 2"
)

const container = React.createRoot(
    "div",
    {
        id: "container"
    },
    [heading, heading2]
)

console.log(heading);

const root = ReactDOM.createRoot(documnet.getElementById("root"))

root.render(container)
