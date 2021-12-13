<template>
<table>
  <thead>
    <th>
      <td>id</td>
      <td>title</td>
      <td>keyword</td>
      <td>cover_url</td>
      <td>total_views</td>
      <td>video_count</td>
      <td>collection_url</td>
    </th>
  </thead>
  <tbody>
    <tr v-for="item in collections" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.title}}</td>
      <td>{{item.keyword}}</td>
      <td>{{item.cover_url}}</td>
      <td>{{item.total_views}}</td>
      <td>{{item.video_count}}</td>
      <td>{{item.collection_url}}</td>
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
      collections: [],
    };
  },
  beforeMount() {
    this.get_categories();
  },
  methods: {
    get_categories() {
      axios
        .get("https://api.avgle.com/v1/collections/0?limit=10")
        .then(({ data }) => {
          this.collections = data.response.collections;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>