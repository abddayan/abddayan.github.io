//
/*toastr.info('info')
toastr.error('Error', 'Error Title')
toastr.success('Success')
toastr.warning('Warning')*/
//
function dbNotifications(){
var newFeatureNote= "The Gallery/Theme feature is now ready. You can click on the link and go to the gallery page."
toastr.info(newFeatureNote, 'New Feature',{
  tapToDismiss: true,
  toastClass: 'toast',
  containerId: 'toast-container',
  debug: false,
 
  showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
  showDuration: 5000,
  showEasing: 'swing', //swing and linear are built into jQuery
  onShown: undefined,
  hideMethod: 'fadeOut',
  hideDuration: 1000,
  hideEasing: 'swing',
  onHidden: undefined,
  closeMethod: false,
  closeDuration: false,
  closeEasing: false,
 
  extendedTimeOut: 0,
  iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning'
  },
  iconClass: 'toast-info',
  positionClass: 'toast-bottom-right',
  timeOut: 0, // Set timeOut and extendedTimeOut to 0 to make it sticky
  titleClass: 'toast-title',
  messageClass: 'toast-message',
  escapeHtml: false,
  target: 'body',
  closeHtml: '<button type="button">&times;</button>',
  newestOnTop: true,
  preventDuplicates: false,
  progressBar: true
})
}