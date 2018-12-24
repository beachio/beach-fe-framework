import store from "./store";

import FeApp from "./components/FeApp";
import FeHeader from "./components/FeHeader";
import FeHeaderSection from "./components/FeHeader/FeHeaderSection";
import FeHeaderLogo from "./components/FeHeader/FeHeaderLogo";
import FeHeaderNav from "./components/FeHeader/FeHeaderNav";
import FeHeaderActions from "./components/FeHeader/FeHeaderActions";
import FeHeaderAction from "./components/FeHeader/FeHeaderAction";
import FeHeaderActionProfile from "./components/FeHeader/FeHeaderActionProfile";
import FeHeaderActionDropdown from "./components/FeHeader/FeHeaderActionDropdown";
import FeHeaderActionDropdownItem from "./components/FeHeader/FeHeaderActionDropdownItem";
import FeSidebar from "./components/FeSidebar";
import FeSidebarLogo from "./components/FeSidebar/FeSidebarLogo";
import FeSidebarNav from "./components/FeSidebar/FeSidebarNav";
import FeSidebarToggle from "./components/FeSidebar/FeSidebarToggle";
import FeSidebarFooter from "./components/FeSidebar/FeSidebarFooter";
import FeContent from "./components/FeContent";
import FeIcon from "./components/FeIcon";

import FeButton from "./components/FeForm/FeButton";
import FeList from "./components/FeForm/FeList";
import FeSelect from "./components/FeForm/FeSelect";
import FeTextField from "./components/FeForm/FeTextField";
import FeTextArea from "./components/FeForm/FeTextArea";
import FeFormRow from "./components/FeForm/FeFormRow";
import FeLabel from "./components/FeForm/FeLabel";
import FeCheckbox from "./components/FeForm/FeCheckbox";
import FeRadio from "./components/FeForm/FeRadio";
import FeSwitch from "./components/FeForm/FeSwitch";

import "./assets/inter-ui-font/inter-ui.css";
import "./assets/icons/icomoon/style.css";
import "./assets/style.css";

import PrettyCheckbox from "pretty-checkbox-vue";

export default {
  install(Vue, params = {}) {
    Vue.prototype.$feStore = store;
    Vue.prototype.$feCreadentials = params.creadentials;

    Vue.use(PrettyCheckbox);

    Vue.component("FeApp", FeApp);
    Vue.component("FeHeader", FeHeader);
    Vue.component("FeHeaderSection", FeHeaderSection);
    Vue.component("FeHeaderLogo", FeHeaderLogo);
    Vue.component("FeHeaderNav", FeHeaderNav);
    Vue.component("FeHeaderActions", FeHeaderActions);
    Vue.component("FeHeaderAction", FeHeaderAction);
    Vue.component("FeHeaderActionProfile", FeHeaderActionProfile);
    Vue.component("FeHeaderActionDropdown", FeHeaderActionDropdown);
    Vue.component("FeHeaderActionDropdownItem", FeHeaderActionDropdownItem);
    Vue.component("FeSidebar", FeSidebar);
    Vue.component("FeSidebarLogo", FeSidebarLogo);
    Vue.component("FeSidebarNav", FeSidebarNav);
    Vue.component("FeSidebarToggle", FeSidebarToggle);
    Vue.component("FeSidebarFooter", FeSidebarFooter);
    Vue.component("FeContent", FeContent);
    Vue.component("FeIcon", FeIcon);

    Vue.component("FeButton", FeButton);
    Vue.component("FeList", FeList);
    Vue.component("FeTextField", FeTextField);
    Vue.component("FeTextArea", FeTextArea);
    Vue.component("FeFormRow", FeFormRow);
    Vue.component("FeLabel", FeLabel);
    Vue.component("FeCheckbox", FeCheckbox);
    Vue.component("FeRadio", FeRadio);
    Vue.component("FeSelect", FeSelect);
    Vue.component("FeSwitch", FeSwitch);
  }
};
