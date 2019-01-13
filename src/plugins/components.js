import AppHeader from '@/components/app-header/Header'
import AppSidebar from '@/components/app-sidebar/Sidebar'
import AppFooter from '@/components/app-footer/Footer'

const ComponentPlugin = {
  install(Vue) {
    Vue.component(AppHeader.name, AppHeader)
    Vue.component(AppFooter.name, AppFooter)
    Vue.component(AppSidebar.name, AppSidebar)
  }
}
export default ComponentPlugin