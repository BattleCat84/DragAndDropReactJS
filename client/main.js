import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.js';
import { observe } from '../imports/ui/SingleTarget/Game';

Meteor.startup(() => {

  // render(<App />, document.getElementById('render-target'));
  observe(imagePosition =>
    render(
        <App imagePosition={imagePosition} />,
      document.getElementById('render-target')
    )
  );
});
