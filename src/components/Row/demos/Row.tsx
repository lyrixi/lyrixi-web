import React from 'react'
import { Page, Card, Row } from 'lyrixi-web'

export default function RowDemo() {
  return (
    <Page>
      <Page.Main>
        <Card>
          <Card.Header>Each row has 24 columns (with gap)</Card.Header>
          <Card.Main>
            <Row gap={{ row: 8, column: 8 }}>
              <Row.Col
                span={8}
                className="lyrixi-color-white"
                style={{
                  backgroundColor: 'var(--lyrixi-color-primary)'
                }}
              >
                Name:
              </Row.Col>
              <Row.Col
                span={16}
                className="lyrixi-color-white"
                style={{
                  backgroundColor: 'var(--lyrixi-color-primary)'
                }}
              >
                Morpheus
              </Row.Col>
              <Row.Col
                span={8}
                className="lyrixi-color-white"
                style={{
                  backgroundColor: 'var(--lyrixi-color-primary)'
                }}
              >
                Age:
              </Row.Col>
              <Row.Col
                span={16}
                className="lyrixi-color-white"
                style={{
                  backgroundColor: 'var(--lyrixi-color-primary)'
                }}
              >
                Twenty-eight
              </Row.Col>
            </Row>
          </Card.Main>
        </Card>
      </Page.Main>
    </Page>
  )
}
