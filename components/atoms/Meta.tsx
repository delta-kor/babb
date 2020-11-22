import { Component } from 'react';
import Head from 'next/head';

export interface MetaContent {
  title: string;
  description: string;
  image?: string;
}

interface Props {
  content: MetaContent;
}

export default class Meta extends Component<Props, any> {
  render() {
    return (
      <Head>
        <title>{this.props.content.title}</title>
        <meta key="description" name="description" content={this.props.content.description} />
        <meta key="og:title" name="og:title" content={this.props.content.title} />
        <meta key="og:description" name="og:description" content={this.props.content.description} />
        <meta key="og:image" name="og:image" content={this.props.content.image} />
      </Head>
    );
  }
}
