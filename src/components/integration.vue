<template>
  <div>
    <el-tabs
      style="100%"
      tabPosition="left"
      v-model="tabIdx"
      @tab-click="switch_category"
    >
      <el-tab-pane
        v-for="category in categories"
        :key="category.CHID"
        :label="category.shortname"
        :name="category.CHID"
      >
        <el-table style="width: 100%" :data="videos">
          <el-table-column prop="preview_url" label="預覽圖">
            <template slot-scope="scope">
              <img
                :src="scope.row.preview_url"
                referrerpolicy="no-referrer"
                height="80"
              />
            </template>
          </el-table-column>
          <el-table-column prop="duration" label="時長"> </el-table-column>
          <el-table-column prop="video_url" label="片源"> </el-table-column>
          <el-table-column
            prop="title"
            label="片名"
            width="1000px"
          ></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "categories",
  data() {
    return {
      tabIdx: null,
      categories: [],
      videos: [],
    };
  },
  beforeMount() {
    this.get_categories();
    this.switch_category(1);
  },
  methods: {
    switch_category(CHID) {
      console.log(CHID);
      this.get_videos(CHID);
    },
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
    get_videos(CHID) {
      axios
        .get(`https://api.avgle.com/v1/videos/0?c=${CHID}&limit=8`)
        .then(({ data }) => {
          this.videos = data.response.videos;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>