import React from 'react';

const colors = [
  null,
  'gray',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'purple'
];


class Forms extends React.Component {
  render() {
    return (
      <div>
        <h1 className='txt-headline mb20'>
          Forms
        </h1>

        <div>
          <fieldset>
            <legend className='txt-bold'>Animals</legend>
            <div className='mt5'>
              <label className='radio-container'>
                <input name='animal' value='cow' type='radio' />
                <div className='radio' />
                cow
              </label>
            </div>
            <div className='mt5'>
              <label className='radio-container'>
                <input name='animal' value='horse' type='radio' />
                <div className='radio' />
                horse
              </label>
            </div>
            <div className='mt5'>
              <label className='radio-container'>
                <input name='animal' value='pig' type='radio' />
                <div className='radio' />
                pig
              </label>
            </div>
          </fieldset>
          <fieldset className='mt30'>
            <legend className='txt-bold'>Animals</legend>
            <div className='mt5'>
              <label className='checkbox-container'>
                <input type='checkbox' value='cow' />
                <div className='checkbox'>
                  <svg
                    className='icon'
                    dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-check"></use>' }}
                  />
                </div>
                cow
              </label>
            </div>
            <div className='mt5'>
              <label className='checkbox-container'>
                <input type='checkbox' value='horse' />
                <div className='checkbox'>
                  <svg
                    className='icon'
                    dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-check"></use>' }}
                  />
                </div>
                horse
              </label>
            </div>
            <div className='mt5'>
              <label className='checkbox-container'>
                <input type='checkbox' value='pig' />
                <div className='checkbox'>
                  <svg
                    className='icon'
                    dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-check"></use>' }}
                  />
                </div>
                pig
              </label>
            </div>
          </fieldset>
        </div>

        <div>
          <h2 className='txt-subhead mb20 mt20'>
            Selects
          </h2>

          {colors.map((color) => (
            <div>
              <div className='mb10'>
                <div className={`select bg-${color}`}>
                  <select>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                  </select>
                  <div className='select-arrow'>
                    <svg
                      className='icon'
                      dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-caret-down"></use>' }}
                    />
                  </div>
                </div>
              </div>
              <div className='mb10'>
                <div className={`select select--stroke color-${color}`}>
                  <select>
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                  </select>
                  <div className='select-arrow'>
                    <svg
                      className='icon'
                      dangerouslySetInnerHTML={{ __html: '<use xlink:href="#icon-caret-down"></use>' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    );
  }
}

export { Forms };