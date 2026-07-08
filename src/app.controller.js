
export const bootstrap = (app ,express) => {
    app.use(express.json());
    app.use(express.urlencoded({extended : true}));
    app.get("/" , (req , res) => res.status(200).json({message : "hello world"}));

    app.all("/*splat", (req, res) => res.status(404).json({ message: "not found" }));
}