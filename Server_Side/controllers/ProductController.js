const Product = require("../models/Product");

exports.addproduct = (req, res) => {
  const prod = new Product({
    ProdBrand: req.body.pbrand,
    ProdName: req.body.prodname,
    ProdCategory: req.body.prodcategory,
    ProdOrginalPrice: req.body.porgprice,
    ProdPrice: req.body.prodprice,
    ProdDiscount: req.body.pdis,
    ProdType: req.body.prodtype,
    ProdSize: req.body.prodsize,
    ProdImage: req.body.prodimage,
    ProdIsAva: req.body.prodisavl,
  });

  prod
    .save()
    .then((insProd) => {
      res.status(200).json(insProd);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.allprod = (req, res) => {
  Product.find()
    .then((allprod) => {
      res.status(200).json(allprod);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.updateprod = (req, res) => {
  Product.findByIdAndUpdate(
    { _id: req.body.id },
    {
      ProdName: req.body.prodname,
      ProdCategory: req.body.prodcategory,
      ProdPrice: req.body.prodprice,
      ProdType: req.body.prodtype,
      ProdSize: req.body.prodsize,
      ProdImage: req.body.prodimage,
      ProdIsAva: req.body.prodisavl,
    },
    { new: true }
  )
    .then((updated) => {
      res.status(200).json(updated);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.deleteprod = (req, res) => {
  Product.findByIdAndDelete(req.body.id)
    .then((deleteprods) => {
      res.status(200).json(deleteprods);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.getProdByTypeAndCategory = (req, res) => {
  Product.where("ProdType")
    .equals(req.body.prodtype)
    .where("ProdCategory")
    .equals(req.body.prodcategory)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
