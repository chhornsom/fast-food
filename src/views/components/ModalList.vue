<template>
    <modal-component :modalId="modalId" colorActionBtn="success" titleActionBtn="Save" modalWidthClass="modal-100"
        :modalHeader="false" cusClass2="cus-height" @handleAction="handleAddAction">
        <template v-slot:bodySection>
            <div>
                <div class="mb-3 row">
                    <label for="staticName" class="col-sm-3 col-form-label">Staff Name:</label>
                    <div class="col-sm-8">
                        <select class="form-select" aria-label="Default select example">
                            <option>
                                aaa </option>
                        </select>
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticName" class="col-sm-3 col-form-label">Device Name:</label>
                    <div class="col-sm-8">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">

                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticName" class="col-sm-3 col-form-label">Device ID:</label>
                    <div class="col-sm-8">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">

                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="staticName" class="col-sm-3 col-form-label">Status:</label>
                    <div class="col-sm-8">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">

                    </div>
                </div>
            </div>
        </template>
    </modal-component>
</template>

<script>
import ModalComponent from "@/components/modal-default.vue";
export default {
    components: {
        ModalComponent
    },
    props: {
        modalId: {
            type: String,
            default: () => "base-info-modal-id"
        },
        modalWidthClass: {
            type: String,
            default: () => "modal-80"
        },
        itemDevice: {
            type: Object,
            default: () => { }
        },
        users: {
            type: Object,
            default: () => { }
        },
        storeIdRecord: {
            type: String,
            default: () => ""
        }
    },
    data() {
        return {
            filterDevice: {
                deviceId: "",
                deviceName: "",
                userId: "",
                createdAt: "",
                createBy: "",
                isActive: ""
            }
        };
    },
    methods: {
        handleAddAction() {
            this.$emit("handleModalAction", this.filterDevice);
        },
        handleAction() {
            this.$emit("handleAction");
        }
    },
    watch: {

    }
};
</script>

<style lang="scss" scoped>
#rejected-modal::v-deep() {
    .cus-height {
        min-height: 600px;
        min-width: 600px;
    }
}

.form-switch {
    padding-left: 0;
    display: inline-block;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}

.form-switch i {
    position: relative;
    display: inline-block;
    width: 46px;
    height: 26px;
    background-color: #4bd763;
    border-radius: 23px;
    vertical-align: text-bottom;
    transition: all 0.3s linear;
}

.form-switch i::before {
    content: '';
    position: absolute;
    left: 0;
    width: 42px;
    height: 22px;
    background-color: #ffffff;
    border-radius: 11px;
    transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
    transition: all 0.25s linear;
}

.form-switch i::after {
    content: '';
    position: absolute;
    left: 0;
    width: 22px;
    height: 22px;
    background-color: rgb(255, 255, 255);
    border-radius: 11px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
    transform: translate3d(2px, 2px, 0);
    transition: all 0.2s ease-in-out;
}

.form-switch:active i::after {
    width: 28px;
    transform: translate3d(2px, 2px, 0);
}

.form-switch:active input:checked+i::after {
    transform: translate3d(16px, 2px, 0);
}

.form-switch input {
    display: none;
}

.form-switch input:checked+i {
    background-color: #4bd763;
}

.form-switch input:checked+i::before {
    transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
}

.form-switch input:checked+i::after {
    transform: translate3d(22px, 2px, 0);
}
</style>