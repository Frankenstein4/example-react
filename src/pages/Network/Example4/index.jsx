import React, { useState, useEffect, useRef } from 'react';
import { VariableSizeGrid as Grid } from 'react-window';
import ResizeObserver from 'rc-resize-observer';
import classNames from 'classnames';
import { Table } from 'antd';
import "./style.less";

function VirtualTable (props) {
    const { columns, scroll } = props;
    const [tableWidth, setTableWidth] = useState(0);
    const widthColumnCount = columns.filter(({ width }) => !width).length;
    const mergedColumns = columns.map((column) => {
        if (column.width) {
            return column;
        }

        return { ...column, width: Math.floor(tableWidth / widthColumnCount) };
    });
    const gridRef = useRef();
    const [connectObject] = useState(() => {
        const obj = {};
        Object.defineProperty(obj, 'scrollLeft', {
            get: () => null,
            set: (scrollLeft) => {
                if (gridRef.current) {
                    gridRef.current.scrollTo({
                        scrollLeft,
                    });
                }
            },
        });
        return obj;
    });

    const resetVirtualGrid = () => {
        gridRef.current.resetAfterIndices({
            columnIndex: 0,
            shouldForceUpdate: true,
        });
    };

    useEffect(() => resetVirtualGrid, [tableWidth]);

    const renderVirtualList = (rawData, { scrollbarSize, ref, onScroll }) => {
        ref.current = connectObject;
        const totalHeight = rawData.length * 54;
        return (
            <Grid
                ref={gridRef}
                className="virtual-grid"
                columnCount={mergedColumns.length}
                columnWidth={(index) => {
                    const { width } = mergedColumns[index];
                    return totalHeight > scroll.y && index === mergedColumns.length - 1
                        ? width - scrollbarSize - 1
                        : width;
                }}
                height={scroll.y}
                rowCount={rawData.length}
                rowHeight={() => 60} /* 与下面300px相对应 */
                width={tableWidth}
                onScroll={({ scrollLeft }) => {
                    onScroll({
                        scrollLeft,
                    });
                }}
                bordered
            >
                {({ columnIndex, rowIndex, style }) => (
                    <div
                        className={classNames('virtual-table-cell', {
                            'virtual-table-cell-last': columnIndex === mergedColumns.length - 1,
                        })}
                        style={style}
                    >
                        {rawData[rowIndex][mergedColumns[columnIndex].dataIndex]}
                    </div>
                )}
            </Grid>
        );
    };

    return (
        <ResizeObserver

            onResize={({ width }) => {
                setTableWidth(width);
            }}
        >
            <Table
                style={{ background: '#fff' }}
                {...props}
                className="virtual-table"
                columns={mergedColumns}
                bordered
                pagination={false}
                components={{
                    body: renderVirtualList,
                }}
            />
        </ResizeObserver>
    );
} // Usage

const columns = [
    {
        title: 'A',
        dataIndex: 'key',
    },
    {
        title: 'B',
        dataIndex: 'key',
    },
    {
        title: 'C',
        dataIndex: 'key',
    },
    {
        title: 'D',
        dataIndex: 'key',
    },
    {
        title: 'E',
        dataIndex: 'key',
    },
    {
        title: 'F',
        dataIndex: 'key',
    },
];
const data = Array.from(
    {
        length: 100000,
    },
    (_, key) => ({
        key,
    }),
);

export default function View () {
    return (
        <VirtualTable
            columns={columns}
            dataSource={data}
            scroll={{
                y: 300
            }}
        />
    )
}