<template>
<table>
  <thead>
    <th>
      <td>CHID</td>
      <td>name</td>
      <td>slug</td>
      <td>total_videos</td>
      <td>shortname</td>
      <td>category_url</td>
      <td>cover_url</td>
    </th>
  </thead>
  <tbody>
    <tr v-for="category in categories" :key="category.CHID">
      <td>{{category.CHID}}</td>
      <td>{{category.name}}</td>
      <td>{{category.slug}}</td>
      <td>{{category.total_videos}}</td>
      <td>{{category.shortname}}</td>
      <td>{{category.category_url}}</td>
      <td>{{category.cover_url}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
import axios from "axios";
export default {
  name: "categories",
  data() {
    return {
      categories: [],
    };
  },
  beforeMount() {
    this.get_categories();
  },
  methods: {
    get_categories() {
      axios
        .get("https://api.avgle.com/v1/categories")
        .then(({ data }) => {
          this.categories = data.response.categories;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>