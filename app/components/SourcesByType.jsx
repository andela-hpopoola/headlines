import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router';

const output = (sourcesObj) => {
  let output = '';
  /*Object.keys(sourcesObj).map((key) => {
    output += <div>
      <a href="#collapse1" className="list-group-item header collapsed" data-toggle="collapse">
        <span className="fa fa-caret-right"></span> &nbsp;&nbsp; {key}
      </a>
      <div id="collapse1" className="collapse">;

      {props.sourcesObj[key].map((source) => {
        output += <a href="http://ism.edu.ng/the-school/the-school" className="list-group-item small">
          <span className="fa fa-caret-right"></span> &nbsp;&nbsp; {source}
        </a>
      })}
      output += </div>;
    output += </div>;
  });*/
  /*output = Object.keys(sourcesObj).map((key) => {
    const title =  (<a href={"#collapse" + key} className="list-group-item header collapsed" data-toggle="collapse">
        <span className="fa fa-caret-right"></span> &nbsp;&nbsp; {key}
      </a>);
    const body = sourcesObj[key].map((source) => {
        return <a href="http://ism.edu.ng/the-school/the-school" className="list-group-item small">
          <span className="fa fa-caret-right"></span> &nbsp;&nbsp; {source}
        </a>
      });

    return <div>
      {title}
      <div id={"#collapse" + key} className="collapse">;
      {body}
      </div>
    </div>;
  });
  console.log(output,'output');
  return output;*/
  output = Object.keys(sourcesObj).map((key) => {
    const body = sourcesObj[key].map((source) => {
      return <div>
          <a className="small">
            <span className="fa fa-caret-right"></span> 
            &nbsp;&nbsp; {source}
          </a>
      </div>;
    });

    return <Collapsible trigger={key}>
        {body}
      </Collapsible>;
  });
  return output;
};
/**
 * Sources By Type - List all the sources
 * @param {object} props get the properties
 * @returns {jsx} the page navigation
 */
const SourcesByType = (props) => {
  return (
      <div className="widget thumbnail">
        <div className="list-group">
          {output(props.sourcesObj)}
        </div>
      </div>
  );
};

/**
 * Set the PropTypes for Sources List
 */
SourcesByType.propTypes = {
  sourcesObj: PropTypes.object,
};

export default SourcesByType;

/*
<aside className="sidebar">
  <div className="list-group">
    <span className="list-group-item top header">Side Menu</span>

      <a href="#collapse1" className="list-group-item header collapsed" data-toggle="collapse">
        <span className="fa fa-caret-right"></span> &nbsp;&nbsp;The School
      </a>
        <div id="collapse1" className="collapse">
          <a href="http://ism.edu.ng/the-school/the-school" className="list-group-item small">
            <span className="fa fa-caret-right"></span> &nbsp;&nbsp;The School
          </a>
          <a href="http://ism.edu.ng/the-school/academic-alliances" className="list-group-item small active">
          <span className="fa fa-caret-right"></span> &nbsp;&nbsp;Academic Alliances</a>
          <a href="http://ism.edu.ng/the-school/affiliates-and-fellows" className="list-group-item small">
          <span className="fa fa-caret-right"></span> &nbsp;&nbsp;Affiliates and Fellows</a>
          <a href="http://ism.edu.ng/the-school/alumni" className="list-group-item small">
          <span className="fa fa-caret-right"></span> &nbsp;&nbsp;Alumni</a>
          <a href="http://ism.edu.ng/the-school/bespoke-business--management-education" className="list-group-item small">
          <span className="fa fa-caret-right"></span> &nbsp;&nbsp;Bespoke Business &amp; Management Education</a>
          <a href="http://ism.edu.ng/the-school/career-development-services" className="list-group-item small">
          <span className="fa fa-caret-right"></span> &nbsp;&nbsp;Career Development Services</a>
          <a href="http://ism.edu.ng/the-school/faculty" className="list-group-item small">
          <span className="fa fa-caret-right"></span> &nbsp;&nbsp;Faculty</a>
          <a href="http://ism.edu.ng/the-school/our-style-and-philosophy" className="list-group-item small">
          <span className="fa fa-caret-right"></span> &nbsp;&nbsp;Our Style and Philosophy</a>
          <a href="http://ism.edu.ng/the-school/reasearch" className="list-group-item small">
          <span className="fa fa-caret-right"></span> &nbsp;&nbsp;Reasearch</a>
          <a href="http://ism.edu.ng/the-school/school-at-a-glance" className="list-group-item small">
          <span className="fa fa-caret-right"></span> &nbsp;&nbsp;School at a glance</a>
          <a href="http://ism.edu.ng/the-school/subject-area" className="list-group-item small">
          <span className="fa fa-caret-right"></span> &nbsp;&nbsp;Subject Area
          </a>
          <a href="http://ism.edu.ng/the-school/the-actionable-corporate-sector-solutions" className="list-group-item small">
          <span className="fa fa-caret-right"></span> &nbsp;&nbsp;The ACTIONABLE Corporate Sector Solutions</a>
          <a href="http://ism.edu.ng/the-school/why-study-at-ism" className="list-group-item small">
          <span className="fa fa-caret-right"></span> &nbsp;&nbsp;Why Study at ISM</a>
          </div>
          </div>
         </aside>*/
