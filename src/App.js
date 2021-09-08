import './App.css';

import { PDFDownloadLink, Image, PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    paddingTop: '24px',
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    width: "50%"
  },
  heading: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "12px",
    fontSize: "24px",
    color: "green"
  },
  paragraph: {
    fontSize: "16px"
  }
});

// Create Document Component
const MyDocument = ({ name }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.heading}>Gift Card Details</Text>

        <View style={styles.row}>
          <View style={styles.section}>

          </View>
          <View style={styles.section}>
            <Image src="barcode.png"></Image>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.section}>
            <Text style={styles.heading}>Section #1</Text>
            <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis nunc justo, ut elementum dui vestibulum id. Ut in turpis viverra neque maximus tristique vitae vitae sem. Maecenas a venenatis lacus. Integer iaculis, urna malesuada condimentum finibus, risus dolor feugiat lectus, ut luctus massa dui vel risus. Donec varius nibh id ante mattis eleifend. Aenean urna nulla, accumsan sit amet congue sit amet, tempus eget leo. Mauris aliquet vehicula auctor.</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Section #2</Text>
            <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin justo metus, ultricies sit amet porttitor id, congue ac orci. Praesent sit amet interdum mauris, ac mattis sapien. Maecenas eu tincidunt neque. Maecenas condimentum quam id ipsum laoreet molestie. Duis aliquet ligula at mi sagittis consequat. Nulla enim turpis, vulputate elementum accumsan sit amet, mollis eget leo. Suspendisse non velit ex. Nulla vestibulum, turpis id commodo lobortis, arcu orci vestibulum nisl, in mattis libero mi quis lacus.</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

function App() {
  return (
    <div className="pdf-viewer-host">

      {/* The PDFViewer component can be used to embed a PDF in a page. */}
      {/*
      <PDFViewer>
         <MyDocument name="James Brown"/>
      </PDFViewer>
      */}

      {/* The PDFDownloadLink component can be used to create a download PDF button. */}

      <PDFDownloadLink document={<MyDocument name="James Brown"/>} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
