/**
 * A sample sivic ad that shows an overlay
 */
class SivicOverlay extends BaseSivicCreative {
  constructor() {
    super();

    this.informationElem_ = document.getElementById('information');

    this.addButtonClickActions_();
  }

  /** @override */
  onTimeUpdate(data) {
    super.onTimeUpdate(data);
    this.informationElem_.innerHTML = 'Current Ad Time ' + this.videoState.currentTime;
  }

  /**
   * Adds actions to different buttons available on the overlay.
   */
  addButtonClickActions_() {
    this.sendRequestOnButtonClick_('request_play', CreativeMessage.REQUEST_PLAY);
    this.sendRequestOnButtonClick_('request_pause', CreativeMessage.REQUEST_PAUSE);
    this.sendRequestOnButtonClick_('request_full_screen', CreativeMessage.REQUEST_FULL_SCREEN);
    this.sendRequestOnButtonClick_('fatal_error', CreativeMessage.FATAL_ERROR);
    this.sendRequestOnButtonClick_('request_skip', CreativeMessage.REQUEST_SKIP);
    this.sendRequestOnButtonClick_('request_stop', CreativeMessage.REQUEST_STOP);
  }

  /**
   * Listens for a click event on a button
   * @param {String} elementName The name of the element.
   * @param {String} message The message to send to the player.
   * @private
   */
  sendRequestOnButtonClick_(elementName, message) {
    document.getElementById(elementName).addEventListener('click',
       () => {sivicProtocol.sendMessage(message);});
  }
}
