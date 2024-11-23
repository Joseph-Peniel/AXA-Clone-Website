

const Modal = () => {
  return (
    <div>
        {/* -- Modal -- */}

<div id="errorModal">
    <div className="header">
        <i className="glyphicon glyphicon-alert"></i>
        Notification
    </div>
    <a className="close close-modal" href="javascript:void(0);" onClick="window.myaxa.hideError();">
        <i className="fa fa-times n-error"></i>
    </a>
    <div className="body"></div>
    <div className="clearfix"></div>
    <div className="action">
        <a href="javascript:void(0);" className="close-me" onClick="window.myaxa.hideError();">Close</a>
    </div>
</div>
<div id="modalSection"></div>
<div className="scroll-to-top hide" onClick="topFunction()" id="backtoTop">
    <svg className="scroll-to-top-icon caret-icon" viewBox="0 0 24 24" data-reactid="608">
        <path fill="currentColor" d="M5.39 1.478L6.86-.025l10.3 10.522.004-.004 1.467 1.497-.003.005.004.004-1.472 1.503-.004-.005L6.9 23.975 5.434 22.48 15.688 12"></path>
    </svg>
</div>
    </div>
  )
}

export default Modal