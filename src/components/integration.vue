<template>
  <div>
    <el-tabs
      style="100%"
      type="card"
      tabPosition="left"
      v-model="activeCHID"
      @tab-click="switch_category"
    >
      <el-tab-pane
        v-for="category in categories"
        :key="category.CHID"
        :label="category.shortname"
        :name="category.CHID"
      >
        <el-table style="width: 50%" :data="videos">
          <el-table-column prop="preview_url" label="預覽圖">
            <template slot-scope="scope">
              <a target="_blank" :href="scope.row.video_url">
                <img :src="scope.row.preview_url" height="80" />
              </a>
            </template>
          </el-table-column>
          <el-table-column
            prop="title"
            label="片名"
            width="500px"
          ></el-table-column>
          <el-table-column prop="duration" label="時長"> </el-table-column>
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
      activeCHID: "1",
      categories: [],
      videos: [],
    };
  },
  beforeMount() {
    // 取得分類
    this.get_categories();
    // 預設第一個分類
    this.switch_category(this.activeCHID);
  },
  methods: {
    switch_category() {
      this.get_videos(this.activeCHID);
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