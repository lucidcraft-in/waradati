import React from 'react'

export default function ProductFilter({ setUrlOnFilter, clearFilter }) {
  return (
    <div className="col-lg-3 col-md-12">
      <aside className="sidebar_widget">
        <div className="widget_inner">
          <div className="widget_list widget_manu">
            <h3>PRICE RANGE</h3>
            <ul>
              <li>
                <a href="#">
                  <input
                    type="radio"
                    id="under_50"
                    name="price_range"
                    value="0-50"
                    defaultValue={true}
                    onChange={(e) => setUrlOnFilter(e, false, true)}
                  />
                  &nbsp;&nbsp; &nbsp; UNDER AED 50
                </a>
              </li>
              <li>
                <a href="#">
                  <input
                    type="radio"
                    id="50-70"
                    name="price_range"
                    value="50-70"
                    onChange={(e) => setUrlOnFilter(e, false, true)}
                  />
                  &nbsp;&nbsp; &nbsp; AED 50-70
                </a>
              </li>
              <li>
                <a href="#">
                  <input
                    type="radio"
                    id="70-90"
                    name="price_range"
                    value="70-90"
                    onChange={(e) => setUrlOnFilter(e, false, true)}
                  />
                  &nbsp;&nbsp; &nbsp; AED 70-90
                </a>
              </li>
              <li>
                <a href="#">
                  <input
                    type="radio"
                    id="90-150"
                    name="price_range"
                    value="90-150"
                    onChange={(e) => setUrlOnFilter(e, false, true)}
                  />
                  &nbsp;&nbsp; &nbsp; AED 90-150
                </a>
              </li>
              <li>
                <a href="#">
                  <input
                    type="radio"
                    id="above_150"
                    name="price_range"
                    value="150-0"
                    onChange={(e) => setUrlOnFilter(e, false, true)}
                  />
                  &nbsp;&nbsp; &nbsp; ABOVE AED 150
                </a>
              </li>
            </ul>
          </div>
          <div className="widget_list widget_filter">
            <form>
              <div id="slider-range"></div>
              <button onClick={(e) => clearFilter()}>Clear</button>
              <input type="text" name="text" id="amount" />
            </form>
          </div>
        </div>
      </aside>
    </div>
  );
}
