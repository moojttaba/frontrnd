const INTIAL_STATE = {
  sections: [
    {
      id: 1,
      header: "میوه و سبزیجات",
      title: "produce",
      imageUrl: "images/produce.jpg",
      linkUrl: "shop/produce",
      list: {
        first: "",
        second: "",
        third: "",
        fourth: "",
      },
    },

    {
      id: 2,
      header: "نانوایی",
      title: "bakery",
      imageUrl: "images/bakery.jpg",
      linkUrl: "shop/bakery",
      list: {
        first: "باگت",
        second: "سنگک",
        third: "لواش",
        fourth: "بربری",
      },
    },
    {
      id: 3,
      header: "نوشیدنی ها",
      title: "beverages",
      imageUrl: "images/beverages.jpg",
      linkUrl: "shop/beverages",
      list: {
        first: "",
        second: "",
        third: "",
        fourth: "",
      },
    },
    {
      id: 4,
      header: "گوشت",
      title: "meat",
      imageUrl: "images/meat.jpg",
      linkUrl: "shop/meat",
      list: {
        first: "",
        second: "",
        third: "",
        fourth: "",
      },
    },

    {
      id: 5,
      header: "حبوبات",
      title: "bulk",
      imageUrl: "images/bulk.jpg",
      linkUrl: "shop/bulk",
      list: {
        first: "",
        second: "",
        third: "",
        fourth: "",
      },
    },

    /*
        {
          title: 'cannedgoods',
          imageUrl: 'images/cannedGoods.jpg',
          id: 6,
          linkUrl: 'shop/cannedgoods'
        },
        {
          title: 'dairyeggs',
          imageUrl: 'images/dairyEggs.jpg',
          id: 7,
          linkUrl: 'shop/dairyeggs'
        },
        {
          title: 'deli',
          imageUrl: 'images/deli.jpg',
          id: 8,
          linkUrl: 'shop/deli'
        },
        {
          title: 'goodspasta',
          imageUrl: 'images/dryGoodsPasta.jpg',
          size: 'large',
          id: 9,
          linkUrl: 'shop/goodspasta'
        },
        {
          title: 'floral',
          imageUrl: 'images/floral.jpg',             
          id: 10,
          linkUrl: 'shop/floral'
        },
        {
          title: 'frozen',
          imageUrl: 'images/frozen.jpg',
          id: 11,
          linkUrl: 'shop/frozen'
        },
        {
          title: 'household',
          imageUrl: 'images/household.jpg',
          id: 12,
          linkUrl: 'shop/household'
        },
        {
          title: 'international',
          imageUrl: 'images/international.jpg',
          id: 13,
          linkUrl: 'shop/international'
        },
        {
          title: 'breakfast',
          imageUrl: 'images/breakfast.jpg',
          id: 14,
          linkUrl: 'shop/breakfast'
        },
   
        {
          title: 'pantry',
          imageUrl: 'images/pantry.jpg',      
          id: 15,
          linkUrl: 'shop/pantry'
        },
        {
          title: 'personalcare',
          imageUrl: 'images/personalCare.jpg',
          id: 16,
          linkUrl: 'shop/personalcare'
        },
        {
          title: 'pets',
          imageUrl: 'images/pets.jpg',
          id: 17,
          linkUrl: 'shop/pets'
        },
        {
          title: 'snacks',
          imageUrl: 'images/snacks.jpg',            
          id: 18,
          linkUrl: 'shop/snacks'
        },
        {
          title: 'babies',
          imageUrl:'images/babies.jpg', 
          id: 19,
          linkUrl: 'shop/babies'
        },
        {
          title: 'savings',
          imageUrl: 'images/savings.jpg',
          id: 20,
          linkUrl: 'shop/savings'
        },
        */
  ],
};

const directoryReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
