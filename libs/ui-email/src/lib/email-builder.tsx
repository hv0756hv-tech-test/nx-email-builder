import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { EmailBuilder } from 'email-builder-js';

const EmailBuilderWrapper = () => {
  return <EmailBuilder />;
};

customElements.define('email-builder', reactToWebcomponent(EmailBuilderWrapper, React, ReactDOM));
