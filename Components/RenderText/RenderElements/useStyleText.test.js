import Elements from "./Elements";
import {render, screen} from '@testing-library/react'


describe('testing component Elements', () => {
    const dataTest = (inlineStyleRanges) => {
      return {
          data: {},
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: inlineStyleRanges,
          key: 'jdjd',
          text: 'О запросах',
          type: 'header-one'
      }
    }

    const notStyleHeading = dataTest([])
    test('render not style heading ', () => {
        const {getByText} = render(<Elements content={notStyleHeading}/>)
        screen.debug()
        const linkElement = getByText('О запросах')
        expect(linkElement).toBeInTheDocument()

    })
    const stylizedHeading = dataTest([{offset: 0, length: 10, style: "TEXT_CENTER"}])
    test('render stylized heading ', () => {
        render(<Elements content={stylizedHeading}/>)
        screen.debug()
        expect(screen.getByText('О запросах')).toBeInTheDocument()
        expect(screen.getByText('О запросах')).toHaveClass('TEXT_CENTER')

    })
})





