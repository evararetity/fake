module.exports = (express, app, passport) => {
    const router = express.Router();

    router.route("/get").get((req, res)=>{
        res.json({Name: "Okedeji Emmanuel"})
    })

    router.route("/get-price").post((req, res) => {
        switch (req.body.fitsIn) {
            case "car":
                farePerKM = 130;
                baseFare = 700;
                pricePerKM = farePerKM * req.body.distance.slice(0, 4);
                // pricePerKM = farePerKM * req.body.distance;
                minPrice = pricePerKM + baseFare < 1000 ? 1000 : Math.round((pricePerKM + baseFare) * 10) / 10;
                maxPrice = Math.round((((50 / 100) * minPrice) + minPrice) * 10) / 10;
                fixedPrice = Math.round((((25 / 100) * minPrice) + minPrice) * 10) / 10;
                res.json({
                    status: 1,
                    fitsIn: "Car",
                    distance: req.body.distance,
                    minPrice: `₦${minPrice}`,
                    maxPrice: `₦${maxPrice}`,
                    fixedPrice: `₦${fixedPrice}`,
                    rawDistance: req.body.distance,
                    rawMinPrice: minPrice,
                    rawMaxPrice: maxPrice,
                    rawFixedPrice: fixedPrice
                });
                break;
            case "truck":
                farePerKM = 450;
                baseFare = 2700;
                distance = req.body.distance.slice(0, 4) < 1 ? 1 : req.body.distance.slice(0, 4);
                pricePerKM = farePerKM * distance;
                minPrice = Math.round((pricePerKM + baseFare) * 10) / 10;
                maxPrice = Math.round((((50 / 100) * minPrice) + minPrice) * 10) / 10;
                fixedPrice = Math.round((((25 / 100) * minPrice) + minPrice) * 10) / 10;

                res.json({
                    status: 1,
                    fitsIn: "Truck",
                    distance: req.body.distance,
                    minPrice: `₦${minPrice}`,
                    maxPrice: `₦${maxPrice}`,
                    fixedPrice: `₦${fixedPrice}`,
                    rawDistance: req.body.distance,
                    rawMinPrice: minPrice,
                    rawMaxPrice: maxPrice,
                    rawFixedPrice: fixedPrice
                });
                break;
            case "van":
                farePerKM = 350;
                baseFare = 2000;
                distance = req.body.distance.slice(0, 4) < 1 ? 1 : req.body.distance.slice(0, 4);
                pricePerKM = farePerKM * distance;
                minPrice = Math.round((pricePerKM + baseFare) * 10) / 10;
                maxPrice = Math.round((((50 / 100) * minPrice) + minPrice) * 10) / 10;
                fixedPrice = Math.round((((25 / 100) * minPrice) + minPrice) * 10) / 10;

                res.json({
                    status: 1,
                    fitsIn: "Van",
                    distance: req.body.distance,
                    minPrice: `₦${minPrice}`,
                    maxPrice: `₦${maxPrice}`,
                    fixedPrice: `₦${fixedPrice}`,
                    rawDistance: req.body.distance,
                    rawMinPrice: minPrice,
                    rawMaxPrice: maxPrice,
                    rawFixedPrice: fixedPrice
                });
                break;
            default:
                res.json({ status: 0 });
                break;
        }
    })

    app.use("/", router);
}