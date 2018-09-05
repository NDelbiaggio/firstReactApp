import Product from "../model/product";
import ProductTag from "../model/productTag";

export default function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        new Product(
          1,
          "Banana",
          "Banana from Thailand growing with a lot of Sun",
          "https://vignette.wikia.nocookie.net/recipes/images/4/4c/Bananas.jpg/revision/latest?cb=20080516004900",
          "3.15 €",
          [new ProductTag("fruit", "blue"), new ProductTag("bio", "green")]
        ),
        new Product(
          2,
          "Strawberries",
          "Strawberries from spain collected by hand and grown without products",
          "https://cdn1.medicalnewstoday.com/content/images/articles/271/271285/three-strawberries.jpg",
          "2.30 €",
          [new ProductTag("fruit", "blue"), new ProductTag("EU", "yellow")]
        ),
        new Product(
          3,
          "Kiwi",
          "Amazing Kiwi directly from china, bio fruits",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/1200px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg",
          "4.50 €",
          [new ProductTag("fruit", "blue")]
        )
      ]);
    }, 300);
  });
}
