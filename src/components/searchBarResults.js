import React from 'react'
import PropTypes from 'prop-types';

const SearchBarResults = (props) => {
  return (
    <div>
      <ul className="suggestions">
        { 
          props.content && props.content.map( text => {
            const regex = new RegExp(props.searchInput, 'gi');
            const questionName = text.Question.replace( 
              regex, `<span class="hl">${props.searchInput}</span>`
            )
            const whatItMeans = text["What you do/What it means"].replace(
              regex, `<span class="hl">${props.searchInput}</span>`
            )
            return (
              <li>
                <span class="name" 
                  dangerouslySetInnerHTML={{ 
                    __html:questionName
                  }}> 
                </span>
                <span class="name" 
                  dangerouslySetInnerHTML={{ 
                    __html:whatItMeans
                  }}> 
                </span>
                {/* <span>{</span> */}
                <span>{text["Type"]}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default SearchBarResults;