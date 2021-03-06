jest.unmock('./StatisticsChartBox');
jest.unmock('../../../services/statisticsChartService');

import React from 'react';
import { mount } from 'enzyme';
import StatisticsChartBox from './StatisticsChartBox';

describe('StatistictsChartBox', () => {
  let chart, config, modalConfig, noDataMsg, errorText;

  beforeEach(() => {
    chart = {
      id: '1'
    };
    config = {};
    modalConfig = {};
    noDataMsg = 'no data';
    errorText = 'some error';

  });

  it('pending', () => {
    const box = mount(
      <StatisticsChartBox
        key={chart.id}
        config={config}
        modalConfig={modalConfig}
        noDataMsg={noDataMsg}
        status={'PENDING'}
        errorText={errorText}
        {...chart} />
    );

    expect(box.find('.spinner.spinner-lg').length).toBe(1);
  });

  it('error', () => {
    const box = mount(
      <StatisticsChartBox
        key={chart.id}
        config={config}
        modalConfig={modalConfig}
        noDataMsg={noDataMsg}
        status={'ERROR'}
        errorText={errorText}
        {...chart} />
    );

    expect(box.find('.pficon.pficon-error-circle-o').length).toBe(1);
  });

  it('resolved', () => {
    const box = mount(
      <StatisticsChartBox
        key={chart.id}
        config={{data: {columns: [1, 2]}}}
        modalConfig={modalConfig}
        noDataMsg={noDataMsg}
        status={'RESOLVED'}
        errorText={errorText}
        {...chart} />
    );

    expect(box.find('.statistics-pie.small').length).toBe(1);
  });
});
