<script>

  export default {
    data() {
      return {
          image: '../images/men-shoes.jpg',
          url: 'https://www.vuejs.org/',
          stockDetails : [
              {
                  itemNumber: 1,
                  itemName : "Shoes",
                  itemPrice : 5,
                  itemQuantity : 30,
                  itemImage: '../images/one-black-sneaker-shoe-isolated-white.jpg'
              },
              {
                  itemNumber: 27466,
                  itemName : "Boots",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/travel-still-life-pack-flat-lay.jpg'
              }
          ],
        }
    },

    methods() {
      
    },

    computed(){
      
    }
  }
</script>

<template>

  <v-card
    class="mx-auto"
    width="1000"
  >
    <v-carousel>
        <v-carousel-item
            src="../images/classic-stylish-men-s-shoes-closeup-gray.jpg"
            cover
        ></v-carousel-item>

        <v-carousel-item
          src="../images/male-background-beauty-modern-leather.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="../images/male-wedding-shoes.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
  </v-card>
  <v-spacer></v-spacer>
  
  <v-card align="center">
    <v-card-item>
      <v-card-title>The No.1 Shoe Shop</v-card-title>
      <v-card-subtitle>Amaizing store to cater for all your footware needs! </v-card-subtitle>
      </v-card-item>
      <v-card-text>
      Welcome to ZEE SHOE SHOP, your premier destination for footwear enthusiasts! Dive into a world where style meets comfort and every step reflects your unique personality. Whether you're searching for the latest trends in sneakers, the timeless elegance of leather loafers, or the rugged durability of hiking boots, we have something to suit every occasion and preference. With a curated collection from top brands and expertly crafted designs, [Website Name] is your ultimate guide to stepping out in style. Explore our wide range of footwear options and discover the perfect pair to elevate your look today!
    </v-card-text>
  </v-card>

      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
  <h3 class="text-center">Customer Reviews</h3>
  <v-divider></v-divider>

  
    <v-col cols="12" md="6">
      <v-card align="centre"
        subtitle="Andrew Cedrick"
        text="Very High quality products i was impressed by the quality!"
        title="Very High Quality Products"
      ></v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card>
        <template v-slot:title>
          I Recieved my order!
        </template>
        <template v-slot:subtitle>
          Bahati Clu
        </template>
        <template v-slot:text>
          I Will be ordering again
        </template>
      </v-card>
    </v-col>
    
    <v-col cols="12" md="6">
      <v-card>
        <v-card-item>
          <v-card-title>Wide Range of Products</v-card-title>
          <v-card-subtitle>Mary Jean</v-card-subtitle>
        </v-card-item>
        <v-card-text>
          I Love the wide range of products
        </v-card-text>
      </v-card>
    </v-col>

</template>