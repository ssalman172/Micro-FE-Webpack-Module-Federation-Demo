module.exports = mongoose => {
  let schema = mongoose.Schema(
    {
      title: String,
      brand: String,
      price: Number,
      rating: Number,
      stock: Number,
      description: String
    },
    { timestamps: true }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Product = mongoose.model("product", schema);
  return Product;
};