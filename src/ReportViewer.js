import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

function ReportViewer(props)  {

    // Create styles
        const styles = StyleSheet.create({
            page: {
                flexDirection: 'row',
                backgroundColor: '#E4E4E4'
            },
            section: {
                margin: 10,
                padding: 10,
                flexGrow: 1
            }
        });

    let blockViews = [];
    for (let block in props.patch.blocks) {
        blockViews.push(
            <View style={{ background: 'red' }}>
                <Text>{block.name}</Text>
            </View>
        );
    };
    blockViews = Array.from(blockViews);
    console.log("Block Views");
    console.log(typeof blockViews);
    console.log(blockViews);
    // Create Document Component
    function MyDocument() {
        if ("name" in props.patch) {
            return (
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View>
                            <Text>{props.patch.name}</Text>
                        </View>
                        {blockViews}
                    </Page>
                </Document>
            );
        } else {
            return (
                <Document>
                </Document>
            );
        }
    }
    return (
        <PDFViewer>
            <MyDocument />
        </PDFViewer>
        )
};

export default ReportViewer;