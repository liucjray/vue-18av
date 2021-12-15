<template>
  <div>
    <el-tabs
      style="100%"
      type="card"
      tabPosition="left"
      v-model="activeCHID"
      @tab-click="switchCategory"
    >
      <el-tab-pane
        v-for="category in categories"
        :key="category.CHID"
        :label="category.shortname"
        :name="category.CHID"
      >
        <el-table
          style="width: 50%"
          :data="videos"
          :loading="isLoading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
        >
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
      isLoading: false,
      categories: [],
      videos: [],
    };
  },
  beforeMount() {
    // 取得分類
    this.getCategories();
    // 預設第一個分類
    this.switchCategory(this.activeCHID);
  },
  methods: {
    switchCategory() {
      this.getVideos(this.activeCHID);
    },
    getCategories() {
      axios
        .get("https://api.avgle.com/v1/categories")
        .then(({ data }) => {
          this.isLoading = true;
          this.categories = data.response.categories;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getVideos(CHID) {
      this.isLoading = true;
      axios
        .get(`https://api.avgle.com/v1/videos/0?c=${CHID}&limit=8`)
        .then(({ data }) => {
          this.isLoading = data.response.success != true;
          this.videos = data.response.videos;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>