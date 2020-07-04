const mens = {
  categories: {
    clothes: {
      tshirts: [
        {
          title: "Adidas T-Shirt",
          size: ["s", "m", "l", "xl"],
          image:
            "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/9169785_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$",
          price: 54.99,
          color: ["red", "white", "blue", "black"],
        },
      ],
      hoodies: [
        {
          title: "Nike Hoodie",
          size: ["s", "m", "l", "xl"],
          image: "https://cdn.bike24.net/i/mb/b2/ef/c5/349995-00-d-747677.jpg",
          price: 110.0,
          color: ["red", "white", "blue", "black"],
        },
      ],
    },
    shoes: [
      {
        sneakers: [
          {
            title: "Nike Air Max 270",
            size: [43, 44, 45],
            image:
              "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F02%2Fnike-top-10-best-selling-sneakers-list-2019-01.jpg?q=90&w=1400&cbr=1&fit=max",
            price: 175.0,
            color: ["black", "white"],
          },
        ],
      },
    ],
    accessories: [
      {
        bags: [
          {
            title: "Nike",
            image:
              "https://i4.cdn.hhv.de/catalog/shop_detail_zoom/00685/685719.jpg",
            price: 49.99,
            color: ["black", "white"],
          },
        ],
      },
    ],
  },
};

function pesho(mens) {
  return JSON.stringify(mens);
}

console.log(pesho(mens));
