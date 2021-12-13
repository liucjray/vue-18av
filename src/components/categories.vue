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
      <td>CHID</td>
      <td>name</td>
      <td>slug</td>
      <td>total_videos</td>
      <td>shortname</td>
      <td>category_url</td>
      <td>cover_url</td>
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
  methods() {
    this.categories = get_categories();
  },
};

async function get_categories() {
  try {
    const get = await axios.get("https://api.avgle.com/v1/categories");
    const { data } = get;
    console.log(data.response.categories);
    return data.response.categories;
  } catch (error) {
    throw new Error(error);
  }
}
</script>