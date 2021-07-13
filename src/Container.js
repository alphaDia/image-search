import styled from 'styled-components'

const Container = styled(({ className, children }) => (
    <div className={className}>{children}</div>
  ))`
    width: 100%;
    margin-top: 1rem;
  `;

export default Container