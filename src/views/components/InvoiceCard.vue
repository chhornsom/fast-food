<template>
  <div class="card">
    <!-- <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0">Invoices</h6>
        </div>
        <div class="col-6 text-end">
          <material-button color="primary" size="sm" variant="outline"
            >View All</material-button
          >
        </div>
      </div>
    </div> -->
    <div class="card-body p-3 mb-0">
      <ul class="list-group">
        <li class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
          <div class="d-flex flex-column">
            <h5 class="mb-1 text-dark font-weight-bold text-sm">CHHORN JEEP | Duck Rice</h5>
            <h6 class="text-dark mb-1 font-weight-bold text-sm">
              March, 01, 2019 - 12:28 PM
            </h6>
            <span class="text-xs">#AR-803481</span>
            <div class="d-flex align-items-center" style="font-size: 20px; color: #56AF5A; font-weight: bold;">
              $300
            </div>
          </div>
          <div class="d-flex align-items-center">
            <material-button size="sm">
              Ordered
            </material-button>
          </div>
        </li>
        <hr>
        <li class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
          <div class="d-flex flex-column">
            <h5 class="mb-1 text-dark font-weight-bold text-sm">CHHORN JEEP | Duck Rice</h5>
            <h6 class="text-dark mb-1 font-weight-bold text-sm">
              March, 01, 2019 - 12:28 PM
            </h6>
            <span class="text-xs">#AR-803481</span>
            <div class="d-flex align-items-center" style="font-size: 20px; color: #56AF5A; font-weight: bold;">
              $300
            </div>
          </div>
          <div class="d-flex align-items-center">
            <material-button size="sm">
              Ordered
            </material-button>
          </div>
        </li>
        <hr>
        <li class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
          <div class="d-flex flex-column">
            <h5 class="mb-1 text-dark font-weight-bold text-sm">CHHORN JEEP | Duck Rice</h5>
            <h6 class="text-dark mb-1 font-weight-bold text-sm">
              March, 01, 2019 - 12:28 PM
            </h6>
            <span class="text-xs">#AR-803481</span>
            <div class="d-flex align-items-center" style="font-size: 20px; color: #56AF5A; font-weight: bold;">
              $300
            </div>
          </div>
          <div class="d-flex align-items-center">
            <material-button size="sm">
              Ordered
            </material-button>
          </div>
        </li>
        <hr>
        <li class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
          <div class="d-flex flex-column">
            <h5 class="mb-1 text-dark font-weight-bold text-sm">CHHORN JEEP | Duck Rice</h5>
            <h6 class="text-dark mb-1 font-weight-bold text-sm">
              March, 01, 2019 - 12:28 PM
            </h6>
            <span class="text-xs">#AR-803481</span>
            <div class="d-flex align-items-center" style="font-size: 20px; color: #56AF5A; font-weight: bold;">
              $300
            </div>
          </div>
          <div class="d-flex align-items-center">
            <material-button color="primary" size="sm">
              Canceled
            </material-button>
          </div>
        </li>
        <hr>
        <li class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
          <div class="d-flex flex-column">
            <h5 class="mb-1 text-dark font-weight-bold text-sm">CHHORN JEEP | Duck Rice</h5>
            <h6 class="text-dark mb-1 font-weight-bold text-sm">
              March, 01, 2019 - 12:28 PM
            </h6>
            <span class="text-xs">#AR-803481</span>
            <div class="d-flex align-items-center" style="font-size: 20px; color: #56AF5A; font-weight: bold;">
              $300
            </div>
          </div>
          <div class="d-flex align-items-center">
            <material-button color="primary" size="sm">
              Canceled
            </material-button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MaterialButton from "@/components/MaterialButton.vue";

export default {
  name: "invoice-card",
  components: {
    MaterialButton
  }
};
</script>
