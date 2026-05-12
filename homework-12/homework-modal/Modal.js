export class Modal {
  constructor(modalId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.overlay = document.getElementById('overlay');
    this.openButton = document.querySelector(`[data-modal="${modalId}"]`);
    this.closeButton = this.modal.querySelector('.modal-close-button');
    this.#initOpen();
    this.#initClose();
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen() {
    this.openButton.addEventListener('click', () => {
      this.open();
    });
  }

  #initClose() {
    this.closeButton.addEventListener('click', () => {
      this.close();
    });

    this.overlay.addEventListener('click', () => {
      if (this.shouldCloseOnOverlay && this.isOpen()) {
        this.close();
      }
    });
  }
}
