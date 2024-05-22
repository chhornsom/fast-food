<template>
  <div
    :id="modalId"
    class="modal fade"
    tabindex="-1"
    data-bs-keyboard="false"
    :data-bs-backdrop="data_backdrop"
    :class="cusClass"
  >
    <div
      class="modal-dialog modal-dialog-centered odal-dialog modal-dialog-scrollable"
      :class="modalWidthClass"
      role="document"
    >
      <loading :is_loading="isLoading" />
      <div class="modal-content" :class="cusClass2">
        <div class="modal-header" v-if="modalHeader">
          <h5 class="modal-title">{{ titleHeader }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <slot name="bodySection"></slot>
        </div>
        <div
          class="modal-footer d-flex justify-content-between"
          v-if="modalFooter"
        >
          <slot name="footerPreSection"></slot>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="handleClose"
          >
            Close
          </button>
          <button
            v-if="hasActionBtn"
            type="button"
            :class="'btn btn-' + colorActionBtn"
            data-bs-dismiss="modal"
            @click="handleAction"
          >
            {{ titleActionBtn }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import $ from "jquery";
export default {
  components: {},
  props: {
    modalHeader: {
      type: Boolean,
      default: () => true
    },

    modalFooter: {
      type: Boolean,
      default: () => true
    },
    modalId: {
      type: String,
      default: () => "random-id"
    },
    data_backdrop: {
      type: String,
      default: () => "static"
    },
    titleHeadertitleHeader: {
      type: String,
      default: () => "Modal Title"
    },
    titleBody: {
      type: String,
      default: () => ""
    },
    titleActionBtn: {
      type: String,
      default: () => "Create"
    },
    colorActionBtn: {
      type: String,
      default: () => "primary"
    },
    toggleModal: {
      type: Boolean,
      default: () => false
    },
    hasActionBtn: {
      type: Boolean,
      default: () => true
    },
    modalWidthClass: {
      type: String,
      default: () => "modal-80"
    },
    cusClass2: {
      type: String,
      default: () => ``
    },
    cusClass: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
      modal: "",
      isLoading: false
    };
  },
  mounted() {
    this.modal = new Modal($(`#${this.modalId}`));
  },
  methods: {
    async handleAction() {
      this.isLoading = true;
      this.$emit("handleAction");
      this.isLoading = false;
    },
    handleClose() {
      this.$emit("handleClose");
    },
    handleToggleModal() {
      this.modal.toggle();
    }
  },
  watch: {
    toggleModal: function (val) {
      this.handleToggleModal();
    }
  }
};
</script>
<style lang="scss" scoped>
button.btn {
  min-width: 100px;
}
</style>
