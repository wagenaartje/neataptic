description: A list of neuro-evolution algorithms set up with Neataptic
authors: Thomas Wagenaar
keywords: genetic-algorithm, Neat, JavaScript, Neataptic, neuro-evolution

This page shows some neuro-evolution examples. Please note that not every example
may always be successful. More may be added in the future!

<div class="panel panel-warning autocollapse">
  <div class="panel-heading clickable">
    1: Uphill and downhill
  </div>
  <div class="panel-body">
    <p class="small">This neural network gets taught to increase the input by 0.2 until 1.0 is reached, then it must decrease the input by 2.0.</p>
    <button type="button" class="btn btn-default" onclick="showModal(1, 0)">Training set</button>
    <button type="button" class="btn btn-default" onclick="showModal(1, 1)">Evolve settings</button>
    <div class="btn-group">
      <button type="button" class="btn btn-primary" onclick="run(1)">Start</button>
      <button type="button" class="btn btn-default status1" style="display: none" onclick="showModal(1, 2)">Status</button>
      <button type="button" class="btn btn-danger error1" style="display: none">Error</button>
    </div>
    <svg class="example1" style="display: none"/>
  </div>
</div>
<div class="panel panel-warning autocollapse">
  <div class="panel-heading clickable">
    2: Count to ten
  </div>
  <div class="panel-body">
    <p class="small">This neural network gets taught to wait 9 inputs of 0, to output 1 at input number 10.</p>
    <button type="button" class="btn btn-default" onclick="showModal(2, 0)">Training set</button>
    <button type="button" class="btn btn-default" onclick="showModal(2, 1)">Evolve settings</button>
    <div class="btn-group">
      <button type="button" class="btn btn-primary" onclick="run(2)">Start</button>
      <button type="button" class="btn btn-default status2" style="display: none" onclick="showModal(2, 2)">Status</button>
      <button type="button" class="btn btn-danger error2" style="display: none">Error</button>
    </div>
    <svg class="example2" style="display: none"/>
  </div>
</div>

<div class="panel panel-warning autocollapse">
  <div class="panel-heading clickable">
    3: Vowel vs. consonants classification
  </div>
  <div class="panel-body">
    <p class="small">This neural network gets taught to classify if a letter of the alphabet is a vowel or not. The data is one-hot-encoded.</p>
    <button type="button" class="btn btn-default" onclick="showModal(3, 0)">Training set</button>
    <button type="button" class="btn btn-default" onclick="showModal(3, 1)">Evolve settings</button>
    <div class="btn-group">
      <button type="button" class="btn btn-primary" onclick="run(3)">Start</button>
      <button type="button" class="btn btn-default status3" style="display: none" onclick="showModal(3, 2)">Status</button>
      <button type="button" class="btn btn-danger error3" style="display: none">Error</button>
    </div>
    <svg class="example3" style="display: none"/>
  </div>
</div>

<div class="modal fade" id="modal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title"></h4>
      </div>
      <div class="modal-body">
        <pre class="modalcontent"></pre>
      </div>
    </div>
  </div>
</div>
